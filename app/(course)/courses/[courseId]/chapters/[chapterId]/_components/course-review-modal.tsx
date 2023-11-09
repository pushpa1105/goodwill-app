import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const Rating = ({
  rate,
  updateRateValue,
}: {
  rate: number;
  updateRateValue: Function;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [ratedStar, setRatedStar] = useState<number>(0);

  const stars = [0, 1, 2, 3, 4];

  const handleStar = (index: number) => {
    if (index === ratedStar) {
      setRatedStar(0);
      updateRateValue(0);
    } else {
      setRatedStar(index);
      updateRateValue(index);
    }
  };
  return (
    <>
      <div>Rate a course</div>
      <div className="flex cursor-pointer">
        {stars.map((star, index) => (
          <Star
            size={30}
            color="#8808e3"
            onMouseEnter={() => setHoveredIndex(index + 1)}
            onMouseLeave={() => setHoveredIndex(0)}
            onClick={() => handleStar(index + 1)}
            className={cn(
              "mr",
              ratedStar && ratedStar > index && "bg-indigo-200",
              hoveredIndex && hoveredIndex > index && "bg-indigo-200	"
            )}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

interface ReviewModalProps {
  children: React.ReactNode;
  courseId: string;
  title: string;
}

const formSchema = z.object({
  reviewText: z.string().min(10),
});

export const ReviewModal = ({
  children,
  courseId,
  title,
}: ReviewModalProps) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const [star, setStar] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reviewText: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const updateRateValue = (val: number) => {
    setStar(val);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/review`, {
        ...values,
        stars: star,
      });
      toast.success("Review added succesfully.");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Give a Review {star}</DialogTitle>
          <DialogDescription>
            Your review helps other learners like you discover great courses.
            Only review the course if you have taken or started taking this
            course.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <Rating rate={0} updateRateValue={updateRateValue} />
            <FormField
              control={form.control}
              name="reviewText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="Write Something..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                onClick={() => setOpen(false)}
              >
                Submit Review
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

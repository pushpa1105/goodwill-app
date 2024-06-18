import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
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
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

interface CategoryModalProps {
  children: React.ReactNode;
  name?: string;
  id?: string;
  collection: string;
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const CategoryModal = ({
  children,
  name,
  id,
  collection,
}: CategoryModalProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name || "",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (id) {
        await axios.patch(`/api/categories/${id}`, {
          values,
          collection,
        });
        toast.success("Category updated succesfully.");
      } else {
        await axios.post(`/api/categories`, { values, collection });
        toast.success("Category added succesfully.");
      }
      setOpen(false);
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="DialogOverlay">
        <DialogContent className="sm:max-w-[425px] DialogContent">
          <DialogHeader>
            <DialogTitle>
              {id ? "Edit " : "Add"} a{" "}
              {collection === "Category" ? "Course" : "Blog"} Category
            </DialogTitle>
            <DialogDescription className="hidden md:block">
              You can edit it later if necessary.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4 p-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          placeholder="Write Something..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

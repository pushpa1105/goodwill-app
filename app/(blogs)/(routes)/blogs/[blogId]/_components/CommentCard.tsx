import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CommentCard = () => {
  return (
    <div className="shadow-sm border rounded mb-4 p-4 mt-8">
      <div className="flex justify-between items-center pr-4 flex-wrap">
        <div className="flex items-center">
          <div>
            <Avatar>
              <AvatarImage src="/logo" />
              <AvatarFallback className="bg-theme text-white">
                CN
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-4">
            <div>
              {/* {!["null null", null, undefined].includes(review.user.name)
                ? review.user.name
                : review.user.email || "Anonymous"} */}
              Anonymous
            </div>
            <div className="text-xs text-muted-foreground">11/12/2022</div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        If you want to access an object property where the property name is
        constructed by concatenating a string with a variable.
      </div>
    </div>
  );
};

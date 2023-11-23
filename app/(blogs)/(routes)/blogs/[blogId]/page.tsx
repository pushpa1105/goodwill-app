import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { BlogComments } from "./_components/comments";

const BlogPage = async () => {
  return (
    <div className="w-full p-2">
      <div className="container h-full">
        <div className="flex flex-col items-center my-8">
          <div>
            <h3 className="text-2xl text-muted-foreground p-4 border-b border-slate-400">
              Entertainment
            </h3>
          </div>
          <h1 className="text-4xl font-semibold text-center">
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <div className="text-md text-muted-foreground text-center my-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </div>
          <div className="relative w-full aspect-video rounded-md overflow-hidden my-4 md:max-w-[80%]">
            <Image
              fill
              className="object-cover group-hover:scale-110 transition duration-250"
              alt="test"
              src="/open-account.jpg"
            />
          </div>
          <div id="blog-body my-6">
            <p className="text-muted-foreground py-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="text-muted-foreground py-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="text-muted-foreground py-4">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
            <p className="text-muted-foreground py-4">
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove,
              the headline of Alphabet Village and the subline of her own road,
              the Line Lane. Pityful a rethoric question ran over her cheek,
              then she continued her way.
            </p>
            <p className="text-muted-foreground py-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="text-muted-foreground">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <Separator />
        </div>
        {/* Comments */}
        <BlogComments />
        {/* Comments */}
        <Separator />
      </div>
    </div>
  );
};

export default BlogPage;

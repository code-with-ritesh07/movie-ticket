import { RedirectBtn } from "@/components/ActionBtn/RedirectBtn";
import { SubmitBtn } from "@/components/ActionBtn/SubmitBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  MovieFormSchema,
  type MovieFormSchemaType,
} from "@/lib/schema/movie-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload } from "lucide-react";
import { useForm } from "react-hook-form";

export const MovieForm = () => {
  const form = useForm<MovieFormSchemaType>({
    resolver: zodResolver(MovieFormSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
      imdRating: "",
      releaseDate: "",
      duration: "",
    },
  });

  const onCreateMovie = (data: MovieFormSchemaType) => {
    console.log(data);
  };
  return (
    <>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-indigo-900 font-bold">
              Create Movie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onCreateMovie)}
              >
                <FormField
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        FullName <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          rows={5}
                          placeholder="write movie description"
                          className="border border-slate-200 p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-x-4">
                  <FormField
                    name="imdRating"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>
                          Imd Rating <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="9.9" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="releaseDate"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>
                          Release Date{" "}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <div className="w-full border-dashed  border-2 flex justify-center items-center p-4">
                          <label
                            htmlFor="file-upload"
                            className="flex flex-col justify-center "
                          >
                            <h1 className="flex justify-center w-full">
                              <CloudUpload />
                            </h1>
                            <h1 className="text-muted-foreground">
                              Upload movie image
                            </h1>
                          </label>
                          <Input
                            type="file"
                            {...field}
                            id="file-upload"
                            className="hidden"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-x-4 items-center">
                  <RedirectBtn url="/dashboard" className="w-[120px]">
                    {" "}
                    Cancel
                  </RedirectBtn>
                  <SubmitBtn
                    isPending={false}
                    className="w-[120px] bg-indigo-500 hover:bg-indigo-500/60"
                  >
                    Create
                  </SubmitBtn>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

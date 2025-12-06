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
  TheaterFormSchema,
  type TheaterFormSchemaType,
} from "@/lib/schema/theater.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const TheaterForm = () => {
  const form = useForm<TheaterFormSchemaType>({
    resolver: zodResolver(TheaterFormSchema),
    defaultValues: {
      name: "",
      location: "",
    },
  });

  const onCreateMovie = (data: TheaterFormSchemaType) => {
    console.log(data);
  };
  return (
    <>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-indigo-900 font-bold">
              Create Theater
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
                        <Input {...field} placeholder="Enter theater name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter theater location"
                        />
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

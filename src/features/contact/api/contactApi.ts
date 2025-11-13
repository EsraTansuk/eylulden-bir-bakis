import { ContactFormModel, ContactResponse } from "../models/ContactModel";
import { rtkBaseApi } from "@/lib/redux-toolkit/rtkBaseApi";

const contactApi = rtkBaseApi
  .enhanceEndpoints({
    addTagTypes: ["Contacts"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      submitContact: build.mutation<ContactResponse, ContactFormModel>({
        query: (data: ContactFormModel) => ({
          url: `/contact`,
          method: "POST",
          body: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          },
        }),
        invalidatesTags: ["Contacts"],
      }),
    }),
  });

export { contactApi };

export const { useSubmitContactMutation } = contactApi;


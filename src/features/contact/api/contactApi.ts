import { ContactFormModel, ContactResponse, ContactInfo } from "../models/ContactModel";
import { rtkBaseApi } from "@/lib/redux-toolkit/rtkBaseApi";

const contactApi = rtkBaseApi
  .enhanceEndpoints({
    addTagTypes: ["Contacts"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getContactInfo: build.query<ContactInfo, void>({
        query: () => ({
          url: `/contact`,
          method: "GET",
        }),
        providesTags: ["Contacts"],
      }),
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

export const { useGetContactInfoQuery, useSubmitContactMutation } = contactApi;


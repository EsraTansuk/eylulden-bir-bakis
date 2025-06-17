"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Ad soyad en az 2 karakter olmalıdır")
    .required("Ad soyad zorunludur"),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta zorunludur"),
  subject: Yup.string()
    .min(5, "Konu en az 5 karakter olmalıdır")
    .required("Konu zorunludur"),
  message: Yup.string()
    .min(10, "Mesaj en az 10 karakter olmalıdır")
    .required("Mesaj zorunludur"),
});

export const ContactForm = () => {
  const handleSubmit = (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values);
    // Burada form verilerini API'ye gönderebilirsiniz
    resetForm();
    alert("Mesajınız başarıyla gönderildi!");
  };

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="w-full flex flex-row gap-6">
              <div className="w-full">
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Ad Soyad"
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary rounded-md"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="w-full">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-posta"
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="w-full">
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Konu"
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={6}
                placeholder="Mesaj"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/4 bg-primary text-white py-2 px-4 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Gönderiliyor..." : "Gönder"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

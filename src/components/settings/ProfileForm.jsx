import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import Cropper from "react-easy-crop";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Pencil } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

import { useProfile } from "./CustomHook";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  dob: Yup.date().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postalCode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

export function ProfileForm({ initialValues }) {
  const formikRef = useRef();
  const {
    handleSubmit,
    onFileChange,
    onCropComplete,
    setImage,
    setZoom,
    setCrop,
    crop,
    zoom,
    image,
    croppedAreaPixels,
  } = useProfile();

  const onCropSave = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      formikRef.current.setFieldValue("profilePhoto", croppedImage);
      setImage(null);
    }
  };

  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize
      initialValues={initialValues ?? {}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={values?.profilePhoto || initialValues?.profilePhoto}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <label
                htmlFor="photo-upload"
                className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full text-white cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
                <input
                  id="photo-upload"
                  type="file"
                  className="hidden"
                  onChange={onFileChange}
                  accept="image/*"
                />
              </label>
            </div>
          </div>

          {image && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg w-96 h-96 relative">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <Button onClick={() => setImage(null)}>Cancel</Button>
                  <Button onClick={onCropSave}>Save</Button>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-y-2 gap-x-6 md:grid-cols-2">
            <Field
              as={Input}
              label="Your Name"
              name="name"
              error={touched.name && errors.name}
            />

            <Field
              as={Input}
              label="User Name"
              name="username"
              error={touched.username && errors.username}
            />

            <Field
              as={Input}
              label="Email"
              name="email"
              type="email"
              error={touched.email && errors.email}
            />

            <Field
              as={Input}
              label="Password"
              name="password"
              type="password"
              placeholder="********"
            />

            <div className="space-y-2">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <DatePicker
                selected={values.dob}
                onChange={(date) => setFieldValue("dob", date)}
                dateFormat="dd MMMM yyyy"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                name="dob"
              />
              {touched.dob && errors.dob && (
                <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
              )}
            </div>

            <Field
              as={Input}
              label="Address"
              name="address"
              error={touched.address && errors.address}
            />

            <Field
              as={Input}
              label="City"
              name="city"
              error={touched.city && errors.city}
            />

            <Field
              as={Input}
              label="Postal Code"
              name="postalCode"
              error={touched.postalCode && errors.postalCode}
            />

            <Field
              as={Input}
              label="Country"
              name="country"
              error={touched.country && errors.country}
            />

            <div className="md:col-span-2 flex justify-end">
              <Button
                type="submit"
                variant="primary"
                className="w-full md:w-auto"
              >
                Save
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(URL.createObjectURL(blob));
    }, "image/jpeg");
  });
}

function createImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });
}

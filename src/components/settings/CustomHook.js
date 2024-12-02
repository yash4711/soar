import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateUser } from "../../store/slices/authSlice";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

export const useProfile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => setImage(reader.result));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values) => {
    dispatch(updateUser(values));
    toast.success(`Changes Saved Successfully`, {
      duration: 3000,
      style: {
        background: "#333",
        color: "#fff",
        borderRadius: "10px",
      },
    });
  };
  return {
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
  };
};

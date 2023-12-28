import { useState } from "react";

const initialFormData = {
  name: "",
  username: "",
  email: "",
  password: "",
  role: "",
};

export default function Register() {
  const [formData, setFormData] = useState(initialFormData);
}

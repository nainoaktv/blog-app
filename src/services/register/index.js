export const registerNewUser = async (formData) => {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json.stringify(formData),
    });

    const finalData = await res.json();
    return finalData;
  } catch (error) {
    console.log(`registerNewUser Error: ${error.message}`);
  }
};

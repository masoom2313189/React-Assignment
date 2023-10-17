import { useEffect, useState } from "react";

export default function useLocalStorageForDetail() {
  const [detail, setDetail] = useState({
    name: "",
    age: ""
  });

  useEffect(() => {
    const storedDetail = localStorage.getItem("detail");
    if (storedDetail) {
      setDetail(JSON.parse(storedDetail));
    }
  }, []);


  return { detail, setDetail };
}

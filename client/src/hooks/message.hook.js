import {useCallback} from "react";

// обрабатываем с помощью библиотеки materialize
export const useMessage = () => {
  return useCallback((text) => {
    if (window.M && text) {
      window.M.toast({ html: text})
    }
  }, [])
}
import { useErrorBoundary } from "react-error-boundary";
export default function ErrorEvent() {
  const { showBoundary } = useErrorBoundary();
  const handleClick = () => {
    try {
      throw new Error("Error is occured in app");
    } catch (e) {
      showBoundary(e);
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      エラー発生
    </button>
  );
}

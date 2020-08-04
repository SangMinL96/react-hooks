export const useConfirm = (message = "", trueMessage, felseMessage) => {
  if (!trueMessage || typeof trueMessage !== "function") {
    return;
  }
  if (felseMessage && typeof felseMessage !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      trueMessage();
    } else {
      felseMessage();
    }
  };
  return confirmAction;
};

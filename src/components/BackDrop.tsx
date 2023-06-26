function Backdrop(props: { onCancel: () => void }) {
  // function clickHandler() {
  //   props.cancel();
  // }

  return (
    <div
      onClick={() => {
        props.onCancel();
      }}
      className="fixed top-0 left-0 w-[100%] h-[100%] z-10 bg-neutral-600 opacity-[0.5]"
    ></div>
  );
}

export default Backdrop;

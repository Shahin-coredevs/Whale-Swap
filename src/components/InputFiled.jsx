/* eslint-disable react/prop-types */
const InputFiled = ({ type, name, placeholder, lebel = "", height }) => {
  return (
    <>
      <lebel className="text-white ">{lebel}</lebel>
      <input
        className={`${
          height ? height : "h-10"
        } my-3 w-[530px] h-12 p-4 rounded-lg text-white cursor-pointer bg-[#121A27] border border-[#ffffff14] placeholder:text-bodyText`}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default InputFiled;

import { ErrorMessage, FieldProps, FormikHelpers } from "formik";
import React from "react";
import Combobox from "react-widgets/Combobox";

interface RenderInputFieldProps {
  field: {
    name: string;
    value: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
  form: {
    touched: {
      [field: string]: boolean;
    };
    errors: {
      [field: string]: string | undefined;
    };
  };
  label: string;
  type?: string;
  info?: string;
}

export const RenderInputField: React.FC<RenderInputFieldProps> = ({
  field,
  form: { touched, errors },
  label,
  type = "text",
  info,
}) => {
  return (
    <div className="w-full py-2 outline-none">
      <label htmlFor={field.name} className="text-black text-sm ">
        {label}
      </label>
      <div className="mt-2.5 w-full text-black rounded-md">
        {type === 'textarea' ? (
          <textarea
            {...field}
            id={field.name}
            rows={4}
            autoComplete="given-name"
            className="p-2 mt-1 text-md w-full border-none rounded-md px-3"
            placeholder={info}
          />
        ) : (
          <input
            {...field}
            id={field.name}
            type={type}
            autoComplete="given-name"
            className="bg-brand-color-200 formInputField p-1 px-4 mt-1 text-md w-full border border-b-2 border-gray-500  focus:border-brand-color-200 rounded-md focus:outline-none"
            placeholder={info}
          />
        )}
        <small>{info}</small>
        {touched[field.name] && errors[field.name] && (
          <div className="error mt-2 text-xs text-brand-color-200">
            {errors[field.name]}
          </div>
        )}
      </div>
      {/* <div className="border-brand-color-200 border-b-4 h-0 w-full">.</div> */}
    </div>
  );
};

interface Option {
  value: string;
}

interface RenderSelectFieldProps {
  input?: {
    name: string;
    value: string;
    onChange: (value: string) => void;
    onBlur: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
  field: {
    name: string;
    value: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
  form: {
    touched: {
      [field: string]: boolean;
    };
    errors: {
      [field: string]: string | undefined;
    };
    setFieldValue: FormikHelpers<Option>["setFieldValue"];
  };
  label: string;
  placeholder?: string;
  options: Option[];
  textField: string;
}

export const RenderSelectField: React.FC<RenderSelectFieldProps> = ({
  input,
  form: { touched, errors, setFieldValue },
  label,
  field,
  options,
  placeholder,
  textField,
}) => {
  const handleChange = (value: string | Option | null) => {
    if (value && typeof value !== "string") {
      setFieldValue(field.name, value.value);
    } else if (typeof value === "string") {
      const selectedOption = options.find((option) => option.value === value);
      if (selectedOption) {
        setFieldValue(field.name, selectedOption.value);
      }
    }
  };

  return (
    <div className="rounded text-xl p-4 flex flex-col items-start justify-betwween w-full text-black">
      <label className="form-label text-white text-sm">{label}</label>
      <Combobox
        data={options}
        dataKey={"value"}
        textField={textField}
        placeholder={placeholder}
        value={input?.value}
        onChange={handleChange}
        className="custom-combobox"
        style={{ width: "100%", marginTop: "0.5rem", fontSize: "1.25rem" }}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error mt-2 text-xs text-theme-text-1500">
          {errors[field.name]}
        </div>
      )}
    </div>
  );
};

interface Item {
  name: string;
  value: string;
}

export const getOptions = (array: Item[], textField: string) => {
  const options: { [key: string]: string }[] = [];
  array.map((item, i) => {
    options.push({ [textField]: item.name, value: item.value });
  });
  return options;
};






// import { ErrorMessage, FieldProps } from 'formik';
// import React from 'react';

// interface RenderInputFieldProps {
//   field: {
//     name: string;
//     value: string;
//     onChange: (
//       e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => void;
//     onBlur: (
//       e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => void;
//   };
//   form: {
//     touched: {
//       [field: string]: boolean;
//     };
//     errors: {
//       [field: string]: string | undefined;
//     };
//   };
//   label: string;
//   type?: string;
//   info?: string;
// }

// export const RenderInputField: React.FC<RenderInputFieldProps> = ({
//   field,
//   form: { touched, errors },
//   label,
//   type = 'text',
//   info,
// }) => {
//   return (
//     <div className="w-full py-2 border-b-2 border-brand-color-200 outline-none">
//       <label htmlFor={field.name} className="text-black text-sm outline-none">
//         {label}
//       </label>
//       <div className="mt-2.5 w-full text-black outline-none">
//         {type === 'textarea' ? (
//           <textarea
//             {...field}
//             id={field.name}
//             rows={4}
//             autoComplete="given-name"
//             className="p-1 mt-1 text-md w-full border-none outline-none"
//             placeholder={info}
//           />
//         ) : (
//           <input
//             {...field}
//             id={field.name}
//             type={type}
//             autoComplete="given-name"
//             className="bg-transparent formInputField p-1 px-4 mt-1 text-md w-full border-none outline-none "
//             placeholder={info}
//           />
//         )}
//         <small>{info}</small>
//         {touched[field.name] && errors[field.name] && (
//           <div className="error mt-2 text-xs text-theme-text-1500">
//             {errors[field.name]}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


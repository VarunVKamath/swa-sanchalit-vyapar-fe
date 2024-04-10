import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./CKEditorStyles.scss";

const CKEditorView = ({
  error,
  label,
  isrequired = false,
  placeholder = "",
  onChange,
  value,
}) => {
  return (
    <div className={`richeditor ${error ? "textarea_errors" : ""}`}>
      <span className={`label text-muted`}>
        {label} {isrequired && <span className="text-danger">*</span>}{" "}
      </span>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        config={{
          toolbar: [],
          placeholder: placeholder,
        }}
        onChange={onChange}
      />
      <div className={`error`}>{error ? error : ""}</div>
    </div>
  );
};

export default CKEditorView;

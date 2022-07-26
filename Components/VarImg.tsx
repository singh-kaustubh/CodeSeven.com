import * as React from "react";
import { useCallback, useState } from "react";
import { ObjectInput } from "react-object-input";
import { MdCancel } from "react-icons/md";
const initial = {
  blue: "",
  yellow: "",
};
export default function Simple() {
  const [value, setValue] = useState<Record<string, string>>(initial);
  const [renderKey, setRenderKey] = useState(Math.random());
  const reset = useCallback(() => {
    setValue(initial);
    setRenderKey(Math.random);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }} className="text-white">
        <ObjectInput
          key={renderKey}
          obj={value}
          onChange={setValue}
          renderItem={(key, value, updateKey, updateValue, deleteProperty) => (
            <div className="flex m-2 space-x-2 justify-center">
              <input
                className="w-1/2 text-center text-black rounded-lg"
                type="text"
                value={key}
                onChange={(e) => updateKey(e.target.value)}
              />
              <input
                className="w-1/2 text-center text-black rounded-lg"
                type="number"
                value={value || ""}
                onChange={(e) => updateValue(e.target.value)}
              />
              <button className="text-white mx-1" onClick={deleteProperty}>
                <MdCancel />
              </button>
            </div>
          )}
          renderEmpty={() => <p>No items</p>}
        />
        <button
          onClick={reset}
          className="text-white"
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

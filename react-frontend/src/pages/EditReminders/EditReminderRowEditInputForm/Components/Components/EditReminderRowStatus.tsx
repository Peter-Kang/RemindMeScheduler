import React from "react";

export interface EditReminderRowStatusProp {
  id: string;
  status: string;
  setStatusCallback: (newStatus: string) => void;
}

export const EditReminderRowStatus: React.FC<EditReminderRowStatusProp> = ({
  id,
  status,
  setStatusCallback,
}) => {
  return (
    <div>
      <select
        id={id}
        name={id}
        onChange={(newStatus) => {
          setStatusCallback(newStatus.target.value);
        }}
        value={status}
      >
        <option value="on-hold">On Hold</option>
        <option value="incomplete">Incomplete</option>
        <option value="autorepeat">Autorepeat</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

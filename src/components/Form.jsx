import React from "react";
import { Button, Form as AntForm, Input, Radio } from "antd";

export default function Form() {
  return (
    <AntForm>
      <AntForm.Item label="Field A">
        <Input placeholder="input placeholder" />
      </AntForm.Item>
      <AntForm.Item label="Field B">
        <Input placeholder="input placeholder" />
      </AntForm.Item>
      <AntForm.Item>
        <Button type="primary">Submit</Button>
      </AntForm.Item>
    </AntForm>
  );
}

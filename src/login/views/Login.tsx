import React from "react";
import { t } from "@lingui/macro";

const version = "v1.1";

const Input = ({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <label style={{ display: "block" }}>
    {label}
    <input {...props} />
  </label>
);

const Login = () => (
  <div>
    <form>
      <Input name="username" label={t`Username`} />
      <Input name="password" label={t`Password`} type="password" />
      <Input name="server" label={t`Server`} />
      <div>
        <button type="reset">{t`Clear`}</button>
        <button type="submit">{t`Login`}</button>
      </div>
    </form>
    <footer>{t`Version ${version}`}</footer>
  </div>
);

export default Login;

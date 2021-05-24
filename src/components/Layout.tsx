import { DarkModeSwitch } from '../components/DarkModeSwitch';

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      {children}
      <DarkModeSwitch />
    </>
  );
}

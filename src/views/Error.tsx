type ViewType = {
  view: string,
}

export const Error = ({ view }: ViewType): JSX.Element => {
  return (
    <div>
      <h1>Error: View Not Set</h1>
      
      <p>The Current value of View is: {view}</p>
    </div>
  );
}
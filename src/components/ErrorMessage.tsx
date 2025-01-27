interface Props {
    message: string;
  }
  
  export const ErrorMessage = ({ message }: Props) => (
    <div className="error-message">
      <p>{message}</p>
    </div>
  );
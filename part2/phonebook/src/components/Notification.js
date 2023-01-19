
const Notification = ({ message, error }) => {
  const styles = {
    success: {
      color: 'green',
      fontWeight: 'semiBold',
      fontSize: 20,
      backgroundColor: 'lightGrey',

      borderStyle: 'solid',
      borderColor: 'green',
      borderSize: 2,
      borderRadius: 10,
      margin: 10,
      padding: 20,

      boxShadow: 1,
    },
    error: {
      color: 'red',
      fontWeight: 'semiBold',
      fontSize: 20,
      backgroundColor: 'lightGrey',

      borderStyle: 'solid',
      borderColor: 'red',
      borderSize: 2,
      borderRadius: 10,
      margin: 10,
      padding: 20,

      boxShadow: 1,
    },
    null: {
      display: 'none',
    }
  }
  if (message === '') return null;
  
  return (
    <div style={message === null ? styles.null : (error ? styles.error : styles.success
    )}>
      {message}
    </div>
  )
}

export default Notification

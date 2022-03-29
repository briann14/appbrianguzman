import { useState, createContext, useContext } from "react"
import "./NotificationServices.css"
const Notification = ({ message, severity }) => {
    const notificationStyles = {
  color: 'white',
  position: 'absolute',
  top: 100,
  right: 5,
  padding: '10px 20px',
  borderLeft: '6px solid #a7a7a7',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15px',
  marginBottom: '15',
  }

    const config = true ?
    {
        style: notificationStyles,
        className: severity === 'success' ? 'Success' : 'Error'
    } : {}

    if(message === '') {
        return null
    }
    
    return (
        <div {...config}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationServicesProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext)
}
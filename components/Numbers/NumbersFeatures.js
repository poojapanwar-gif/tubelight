import React from 'react'
import styles from '../../styles/NumbersFeatures.module.scss'
const NumbersFeatures = () => {
  const featureCards = [
    {
      title:"Local numbers, globally",
      details:"Set up numbers locally across over 100 countries and more than 700 prefixes and area codes."
    },
        {
      title:"Numbers to fit your needs",
      details:"Choose toll-free, local, national numbers with text or calling capabilities based on your needs."
    },
        {
      title:"Guidance on regulations",
      details:"Get expert advice on what is, or what is not, possible within the regulations for a specific country."
    },
        {
      title:"Cut out the Middle Man",
      details:"Our self-serve platform lets you buy and manage long numbers or short codes via web or API. Ready to use in an instant with no added technical or commercial setup."
    },
        {
      title:"Customer Experiences",
      details:"Boost customer experience by using Numbers to create automated communication flows with embedded conditional responses designed to react to user replies."
    },
        {
      title:"Collect Replies",
      details:"Build rich customer profiles by forwarding their replies via Webhook, email, SMPP or IP address to any server, regardless of channel."
    },
  ]
  return (
    <div className={styles["number-feature-section"]}>
      <h2>Features</h2>
      <div className={styles["all-features-cards"]}>
        {
          featureCards.map((item,index)=>(
            <div className={styles["feature-card"]} key={index}>
              <h5>{item.title}</h5>
              <p>{item.details}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NumbersFeatures

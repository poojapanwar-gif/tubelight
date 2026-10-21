"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Developers.module.scss";

const Developers = () => {
  const [activeLang, setActiveLang] = useState("python");
  const [displayedCode, setDisplayedCode] = useState("");

  const tabs = [
    { id: "python", label: "Python" },
    { id: "node", label: "Node.js" },
    { id: "php", label: "PHP" },
    { id: "ruby", label: "Ruby" },
    { id: "java", label: "Java" },
    { id: "csharp", label: "C#" },
    { id: "curl", label: "cURL" },
  ];

  const samples = {
    python: `# pip install tubelight
import os
from tubelight.rest import Client

# Find your Account SID and Auth Token in the console
account_sid = os.environ['TUBELIGHT_ACCOUNT_SID']
auth_token  = os.environ['TUBELIGHT_AUTH_TOKEN']
client = Client(account_sid, auth_token)

message = client.messages.create(
    body='Hi there from Tubelight',
    from_='+15017122661',
    to='+919876543210'
)
print(message.sid)`,

    node: `// npm install tubelight
const accountSid = process.env.TUBELIGHT_ACCOUNT_SID;
const authToken  = process.env.TUBELIGHT_AUTH_TOKEN;
const client = require('tubelight')(accountSid, authToken);

client.messages
  .create({
    body: 'Hi there from Tubelight',
    from: '+15017122661',
    to: '+919876543210'
  })
  .then(message => console.log(message.sid));`,

    php: `require_once '/path/to/vendor/autoload.php';
use Tubelight\\Rest\\Client;

$sid   = getenv("TUBELIGHT_ACCOUNT_SID");
$token = getenv("TUBELIGHT_AUTH_TOKEN");
$client = new Client($sid, $token);

$message = $client->messages->create("+919876543210",
    ["body" => "Hi there from Tubelight", "from" => "+15017122661"]
);
print($message->sid);`,

    ruby: `# gem install tubelight-ruby
require 'tubelight-ruby'

account_sid = ENV['TUBELIGHT_ACCOUNT_SID']
auth_token  = ENV['TUBELIGHT_AUTH_TOKEN']
@client = Tubelight::REST::Client.new(account_sid, auth_token)

message = @client.messages.create(
  body: 'Hi there from Tubelight',
  from: '+15017122661',
  to: '+919876543210'
)
puts message.sid`,

    java: `import com.tubelight.Tubelight;
import com.tubelight.rest.api.v1.Message;
import com.tubelight.type.PhoneNumber;

public class Example {
  public static void main(String[] args) {
    Tubelight.init(System.getenv("TUBELIGHT_ACCOUNT_SID"),
                   System.getenv("TUBELIGHT_AUTH_TOKEN"));
    Message message = Message.creator(
        new PhoneNumber("+919876543210"),
        new PhoneNumber("+15017122661"),
        "Hi there from Tubelight").create();
    System.out.println(message.getSid());
  }
}`,

    csharp: `using System;
using Tubelight;
using Tubelight.Rest.Api.V1.Account;

TubelightClient.Init(
    Environment.GetEnvironmentVariable("TUBELIGHT_ACCOUNT_SID"),
    Environment.GetEnvironmentVariable("TUBELIGHT_AUTH_TOKEN"));

var message = MessageResource.Create(
    body: "Hi there from Tubelight",
    from: new Tubelight.Types.PhoneNumber("+15017122661"),
    to:   new Tubelight.Types.PhoneNumber("+919876543210"));

Console.WriteLine(message.Sid);`,

    curl: `curl -X POST "https://api.tubelight.com/v1/Accounts/$TUBELIGHT_ACCOUNT_SID/Messages.json" \\
  --data-urlencode "Body=Hi there from Tubelight" \\
  --data-urlencode "From=+15017122661" \\
  --data-urlencode "To=+919876543210" \\
  -u $TUBELIGHT_ACCOUNT_SID:$TUBELIGHT_AUTH_TOKEN`,
  };

  useEffect(() => {
    const fullCode = samples[activeLang] || "";
    let i = 0;
    const chunk = Math.max(2, Math.ceil(fullCode.length / 90));
    setDisplayedCode("");

    const interval = setInterval(() => {
      i = Math.min(i + chunk, fullCode.length);
      setDisplayedCode(fullCode.slice(0, i));
      if (i >= fullCode.length) {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [activeLang]);

  return (
    <section className={styles["dev-sec"]} id="developers">
      <div className={styles.wrap}>
        <div className={styles["dev-grid"]}>
          {/* Left copy */}
          <div className={styles["dev-copy"]}>
            <h2>Build. Without limits.</h2>
            <p>
              Sign up for a free Tubelight account and grab one of our official server-side SDKs. Send your first message, call, or email in minutes.
            </p>
            <div className={styles["dev-cta"]}>
              <a className={`${styles.btn} ${styles["btn-blue"]}`} href="#">
                View docs
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right code card */}
          <div className={styles["code-card"]}>
            <div className={styles["code-tabs"]} role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles["code-tab"]} ${activeLang === tab.id ? styles.active : ""}`}
                  onClick={() => setActiveLang(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={styles["code-winbar"]}>
              <i className={styles.r}></i>
              <i className={styles.y}></i>
              <i className={styles.g}></i>
              <span className={styles["code-file"]}>send_message</span>
            </div>
            <pre className={styles["code-pre"]}>
              <code>{displayedCode}</code>
              <span className={styles["code-cursor"]}>▎</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
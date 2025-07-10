import portfolio from '../assets/portfolio.jpg';
import task from '../assets/task.jpg';
import Ecom from '../assets/Ecom.jpg';



const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built using React and Material UI.",
    image: portfolio,
    link: "https://www.behance.net/search/projects/web%20design%20portfolio"
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A web app to manage tasks efficiently using React Hooks.",
    image: task,
    link: "https://www.atlassian.com/software/jira/service-management?campaign=17879825204&adgroup=139892808616&targetid=kwd-319497639488&matchtype=p&network=g&device=c&device_model=&creative=672185133996&keyword=issue%20and%20project%20tracking%20software&placement=&target=&ds_eid=700000001721198&ds_e1=GOOGLE&gad_source=1&gad_campaignid=17879825204&gbraid=0AAAAADAVAKevgj5OLV1q9NSLT4h18OUXy&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9Ea0goo8ZmvGnsPKZp7vYFjxCCPB5z-0QskeHwVx_flnQnK72HzKwhoCc1kQAvD_BwE"
  },
  {
    id: 3,
    title: "E-Commerce UI",
    description: "A responsive e-commerce front-end using Material UI.",
    image: Ecom,
    link: "https://mail.google.com/mail/u/0/#inbox"
  }
];

export default projects;

import React from "react";
import styles from './Users.module.css'
import Button from "@material-ui/core/Button";

const Users = (props) => {
   if (props.users.length === 0 ) {
      props.setUsers(
         [
            {
               id: 1,
               photoUrl: 'https://funkopoprussia.com/image/data/TV-Show/Icons/funko-pop-russia-Directors-Ava-DuVernay-FU45258.png',
               followed: true,
               firstName: "Aleksa",
               status: 'Busy',
               location: {city: 'Krasnodar', country: 'Russia'}
            },
            {
               id: 2,
               photoUrl: 'https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png',
               followed: false,
               firstName: "Medusa",
               status: 'Look at me now',
               location: {city: 'Rostov', country: 'Russia'}
            },
            {
               id: 3,
               photoUrl: 'https://meragor.com/files/styles//ava_800_800_wm/p-lxk8vkth8.jpg',
               followed: false,
               firstName: "Sasha",
               status: 'What are you looking for',
               location: {city: 'Moscow', country: 'Russia'}
            },
            {
               id: 4,
               photoUrl: 'http://cs323126.vk.me/v323126677/78e2/8j2cQSeCbWE.jpg',
               followed: true, firstName: "Jonny", status: '322', location: {city: 'Moscow', country: 'Russia'}
            },
            {
               id: 5,
               photoUrl: 'http://sun9-63.userapi.com/c623227/v623227811/6b7e/Zaq5_Ym9-eE.jpg',
               followed: true, firstName: "Peter", status: 'Parker', location: {city: 'Moscow', country: 'Russia'}
            }
         ]
      )
   }
   return (
      <div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div><img src={u.photoUrl} className={styles.usersPhoto}/></div>
                  <div>{u.followed
                     ? <Button onClick={() => {
                        props.unfollow(u.id)
                     }} color="primary">Unfollow</Button>
                     : <Button onClick={() => {
                        props.follow(u.id)
                     }} color="primary"> Follow</Button>}
                  </div>
               </span>

               <span>
                  <span>
                     <div>{u.firstName}</div>
                  <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                  </span>
               </span>
            </div>)
         }

      </div>


   )
}
export default Users;
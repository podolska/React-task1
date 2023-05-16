import { useEffect, useState } from 'react';
import { getUsers, getAlbums, getPhotos } from './apiUsers';

export default function UsersTask() {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers()
            .then(result => {
                if (result) setUsers(result);
            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong. Try again later')
            });
    }, []);

    const showAlbums = (e, id) => {
        getAlbums(id)
            .then(result => {
                if (result) {
                    const userData = users.find(el => el.id === id);
                    const index = users.indexOf(userData);
                    const newUsers = [...users];
                    newUsers[index].albums = result;
                    setUsers(newUsers);
                };

            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong. Try again later')
            });
    };

    const showPhotos = (e, albumId, id, albumIndex) => {
        getPhotos(albumId)
            .then(result => {
                const userData = users.find(el => el.id === id);
                const index = users.indexOf(userData);
                const newUsers = [...users];
                newUsers[index].albums[albumIndex].photos = result;
                setUsers(newUsers);
            })
            .catch(error => console.log(error));
    };

    const userInfo = ({ id, name, username, email, address, phone, website, company, albums = null, photos }) =>
    (<div className='user__container' key={id} id={id}>
        <table>
            <tbody>
                <tr id='row'>
                    <th>Name / Username</th>
                    <td>{name} / {username}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{email}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{address.zipcode} {address.city}, {address.street} {address.suite}</td>
                </tr>
                <tr>
                    <th>Phone number</th>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{website}</td>
                </tr>
                <tr>
                    <th>Company</th>
                    <td>{company.name}</td>
                </tr>
            </tbody>
        </table>
        <button onClick={(e) => showAlbums(e, id)}>Albums</button>
        <div className='user__albums'>
            {albums && albums.map((el, index) =>
            (<div className='user__album' key={el.id}>
                <p>{el.title}</p>
                <button onClick={(e) => showPhotos(e, el.id, id, index)}>Photos</button>
                {el.photos &&
                    <div className='user__photos'>
                        {el.photos.map(photo => (<img src={photo.url} alt={photo.title} key={photo.id}/>))}
                    </div>
                }
            </div>)
            )}
        </div>
    </div>);

    return (
        <div className='users'>
            {users && users.map(el => userInfo(el))}
        </div>
    );
};
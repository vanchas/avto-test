import React from 'react';

function AdminPageControl({component, changeComponent}) {
    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center admin-page-control">
                <li className={`${component === 'text' && 'active'} page-item`} onClick={e => changeComponent('text')}>
                    <a className={`${component === 'text' && 'active'} page-link`} href="#">
                        Изменить текст</a>
                </li>
                <li className={`$component === 'requests' && 'active'} page-item`} onClick={e => changeComponent('requests')}>
                    <a className="page-link" href="#">
                        Данные по запросам</a>
                </li>
                <li className={`${component === 'users' && 'active'} page-item`} onClick={e => changeComponent('users')}>
                    <a className="page-link" href="#">
                        Данные по пользователям</a>
                </li>
                <li className={`${component === 'forms' && 'active'} page-item`} onClick={e => changeComponent('forms')}>
                    <a className="page-link" href="#">
                        Управление полями формы</a>
                </li>
            </ul>
        </nav>
    );
}

export default AdminPageControl;
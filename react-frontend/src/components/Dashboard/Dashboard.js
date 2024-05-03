import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import welcomeImg from '../../assets/media/welcome-banner.png';

const Dashboard = (props) => {
    useEffect(() => {}, []);
    const url = process.env.REACT_APP_SERVER_URL;
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="flex w-10">
                <div className="w-8 mt-8">
                    <div className="w-full flex justify-content-center flex-wrap ">
                        {/* Links to services */}
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/users'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Users</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/userProfiles'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>UserProfiles</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/positionRoleDepartment'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>PositionRoleDepartment</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/invitations'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Invitations</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/roles'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Roles</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/refPositions'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>RefPositions</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/servicePermissions'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>ServicePermissions</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/fieldPermissions'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>FieldPermissions</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/serviceMeta'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>ServiceMeta</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/fieldMeta'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>FieldMeta</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/mobileNumbers'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>MobileNumbers</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/mobileDevices'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>MobileDevices</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/preferences'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Preferences</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/ipLoginAccess'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>IpLoginAccess</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/profileStatus'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>ProfileStatus</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/emailLog'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>EmailLog</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/addresses'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Addresses</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/companies'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Companies</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/userCompanies'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>UserCompanies</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/branches'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Branches</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/departments'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Departments</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/sections'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Sections</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/teams'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Teams</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/phones'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Phones</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/recentActivities'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>RecentActivities</div></div></Link></div>
                        {/* ~cb-add-services-card~ */}
                    </div>
                </div>
                {/* <div className="col-12 lg:col-6 xl:col-4">
                    <Link to="/admin">
                        <div className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom" style={{ height: '10rem' }}>
                            <div className="text-900 font-medium text-lg">Administrative Dashboards</div>
                        </div>
                    </Link>
                </div> */}
                <div className="w-4 flex flex-column align-items-center">
                    <img src={welcomeImg} alt="welcome" className="h-30rem" />
                    <p className="text-7xl m-0">Welcome!</p>
                    <p>You are ready to go!</p>
                </div>
            </div>
            {/* <div className="card w-10 my-6">
                <h4>REST API Ready</h4>
                <p className="underline m-0">e.g. Authentication</p>
                <p>POST {`${url}`}/authentication {`{ "email": "example@email.com",    "password": "123456" }`}</p>
                <p className="underline m-0">e.g. CRUD</p>
                <p className="m-0">
                    GET {`=>`} GET {`${url}`}/users/{`<userId>`}
                </p>
                <p className="m-0">
                    CREATE {`=>`} POST {`${url}`}/users` {`{ "email": "example2@email.com",    "password": "456789" }`}
                </p>
                <p className="m-0">
                    PATCH {`=>`} PATCH {`${url}`}/users/{`<userId>`}` {`{ "name": "Thomas Smith" }`}
                </p>
                <p className="m-0">
                    DELETE {`=>`} DELETE {`${url}`}/users/{`<userId>`}
                </p>
            </div> */}
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);

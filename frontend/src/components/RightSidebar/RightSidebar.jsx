import React from 'react'
import './RightSidebar.css'

const RightSidebar = () => {
  return (
    
    <>
    
    {/* Right Section Start */}
    <div className="right-sidebar">
          

          <div className="recent-updates">
            <h2>Recent Updates</h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                  <img src="https://boxingjunkie.usatoday.com/wp-content/uploads/sites/6/2023/11/1762174831-e1700349459478.jpg?w=1000&h=600&crop=1" alt="Profile" />
                </div>
                <div className="message">
                  <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                  <small className="text-muted">2 Minutes Ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="https://emi.parkview.com/media/Image/Dashboard_952_The-many-health-benefits-of-regular-exercise_11_20.jpg" alt="Profile" />
                </div>
                <div className="message">
                  <p><b>Jane Doe</b> received her order of Night lion tech GPS drone.</p>
                  <small className="text-muted">10 Minutes Ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="https://static.toiimg.com/thumb/imgsize-148660,msid-88953130,width-600,height-335,resizemode-75/88953130.jpg" alt="Profile" />
                </div>
                <div className="message">
                  <p><b>John Smith</b> received his order of Night lion tech GPS drone.</p>
                  <small className="text-muted">20 Minutes Ago</small>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        {/* Right Section End */}

    </>

  )
}

export default RightSidebar

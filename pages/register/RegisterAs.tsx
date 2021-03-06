interface RegisterInterface {
  id: number;
  heading: string;
  info: string;
  link: string;
}

const registerInfo: RegisterInterface[] = [
  {
    id: 1,
    heading: 'Register As Employer',
    info: 'If you register as an Employer you will be able to book a server, busser or dishwasher for your event and post jobs.',
    link: 'Employer',
  },
  {
    id: 2,
    heading: 'Register As Employee',
    info: 'If you register as an Employee you will be able to see which jobs are available and schedule a shift if you want to work.',
    link: 'Employee',
  },
];

export default function RegisterAs({
  onShowEmployeeForm,
  onShowEmployerForm,
}: any) {
  return (
    <main>
      <div className='row'>
        {registerInfo.map((info) => (
          <div className='col-sm-6' key={info.id}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{info.heading}</h5>
                <p className='card-text'>{info.info}</p>
                <button
                  className='btn btn-primary'
                  onClick={
                    info.link === 'Employer'
                      ? onShowEmployeeForm
                      : onShowEmployerForm
                  }
                >
                  Register as {info.link}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

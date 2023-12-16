
const Hero = (props) => {
    return (
        <div>
            <ul>
                 <li>{props.obj.name}</li>
                 <li>{props.obj.address}</li>
                 <li>{props.obj.email}</li>
            </ul>
            <button onClick={props.alert}>Click Me</button>
        </div>
    );
};

export default Hero;
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { browserHistory } from 'react-router';

import { login } from '../utils/request';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let prop = e.target.name;
        this.setState({
            [prop] : e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let body = {
            name: this.state.name,
            password: this.state.password
        };
        
        login(body)
            .then(res => {
                 this._verifyLogin(res);
            })
    }

    _verifyLogin(res) {
        switch (res.status) {
            case 'fail':
                alert(res.description);
                break;
            case 'success':
                let token = res.token;
                sessionStorage.setItem('blog-token', token);
                browserHistory.push('/admin/manage');
                break;
            default:
                alert('连接服务器失败！');
                break;
        }
    }
    
    render() {
        return (
            <Container className='login'>
                <Row>
                    <Col lg='12'>
                        <div className="brand text-center">
                            <h1>
                                <div className="logo-icon">
                                    <svg className="icon-psyduck" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M512.004049 188.973143a24.293771 24.293771 0 0 1-24.293771-24.293771V24.293771a24.293771 24.293771 0 1 1 48.587541 0v140.385601a24.293771 24.293771 0 0 1-24.29377 24.293771z" fill="#33363A"></path><path d="M486.268848 212.983486a24.261379 24.261379 0 0 1-20.220515-10.794532l-78.031591-116.739665a24.293771 24.293771 0 1 1 40.392443-26.998477l78.031591 116.739665a24.293771 24.293771 0 0 1-20.171928 37.793009zM537.731152 212.983486a24.293771 24.293771 0 0 1-20.171928-37.793009l78.031591-116.739665a24.285673 24.285673 0 1 1 40.392443 26.998477l-78.031591 116.739665a24.261379 24.261379 0 0 1-20.220515 10.794532z" fill="#33363A"></path><path d="M910.494767 562.886663c0 167.432666-178.413451 303.194354-398.490718 303.194354-220.085365 0-398.490718-135.769786-398.490718-303.194354 0-167.465058 178.405353-368.123505 398.490718-368.123505 220.069169 0 398.490718 200.658447 398.490718 368.123505z" fill="#FFF800"></path><path d="M910.494767 562.886663c0 167.432666-178.413451 303.194354-398.490718 303.194354-220.085365 0-398.490718-135.769786-398.490718-303.194354 0-167.465058 178.405353-282.844272 398.490718-282.844272 220.069169 0 398.490718 115.379214 398.490718 282.844272z" fill="#FFD400"></path><path d="M596.862189 472.651501c0 11.296603-37.987359 13.321084-84.85814 13.321085s-84.85814-2.024481-84.85814-13.321085c0-11.280407 37.987359-40.773045 84.85814-40.773045s84.85814 29.500735 84.85814 40.773045z" fill="#FFF800"></path><path d="M910.494767 562.886663c0 167.432666-178.413451 303.194354-398.490718 303.194354-220.085365 0-398.490718-135.769786-398.490718-303.194354 0-167.481254 50.701099 148.515917 398.490718 148.515917s398.490718-315.997171 398.490718-148.515917z" fill="#FFB000"></path><path d="M512.004049 878.227902c-226.426039 0-410.637603-141.462626-410.637603-315.341239 0-172.242833 183.166932-380.27039 410.637603-380.27039s410.637603 208.027557 410.637603 380.27039c0 173.878614-184.211564 315.341239-410.637603 315.341239z m0-671.317858c-214.011922 0-386.343833 194.738865-386.343833 355.976619 0 160.484648 173.311759 291.047469 386.343833 291.047469s386.343833-130.562821 386.343833-291.047469c0-161.237755-172.340008-355.976619-386.343833-355.976619z" fill="#33363A"></path><path d="M381.125409 492.531904a12.146885 12.146885 0 0 1-12.146885-12.146886c0-7.045193-20.139536-19.993773-53.057595-19.993773-32.901863 0-53.049497 12.94858-53.049497 19.993773a12.146885 12.146885 0 0 1-24.29377 0c0-25.249325 33.241976-44.287544 77.343267-44.287543s77.351365 19.038218 77.351365 44.287543a12.146885 12.146885 0 0 1-12.146885 12.146886zM773.275453 492.531904a12.146885 12.146885 0 0 1-12.146885-12.146886c0-7.045193-20.139536-19.993773-53.049497-19.993773s-53.057595 12.94858-53.057595 19.993773a12.146885 12.146885 0 0 1-24.29377 0c0-25.249325 33.250074-44.287544 77.351365-44.287543s77.343267 19.038218 77.343267 44.287543a12.146885 12.146885 0 0 1-12.146885 12.146886z" fill="#33363A"></path><path d="M831.175606 824.0285c0-102.819335-93.717269-136.288053-163.383705-192.02606-116.553413-100.276587-78.250235-164.169203-150.953392-169.157524v-0.348211c-1.692466 0-3.247267 0.064783-4.842558 0.113371-1.587193-0.048588-3.150092-0.113371-4.842558-0.113371v0.348211c-72.703157 4.980223-34.399979 68.880937-150.953392 169.157524-69.666436 55.738008-163.383705 89.206725-163.383705 192.02606 0 166.056019 164.541708 180.5594 314.328999 187.42644v0.332015c1.603389 0 3.222974-0.129567 4.842558-0.161959 1.611487 0.032392 3.231071 0.161958 4.842558 0.161959v-0.332015c149.795389-6.867039 314.345195-21.37042 314.345195-187.42644z" fill="#FFF4C7"></path><path d="M826.438321 825.291776C806.622702 730.489386 728.186215 724.051537 667.791901 675.731227c-116.553413-100.276587-78.250235-164.161105-150.953392-169.157524v-0.348211c-1.692466 0-3.247267 0.080979-4.842558 0.129567-1.587193-0.048588-3.150092-0.129567-4.842558-0.129567v0.348211c-72.703157 4.996419-34.399979 68.880937-150.953392 169.157524-60.394314 48.32031-138.830801 54.758159-158.64642 149.560549 27.816367 123.792957 174.656014 136.223269 309.591714 142.426279v0.332015c1.603389 0 3.222974-0.129567 4.842558-0.170057 1.611487 0.048588 3.231071 0.170056 4.842558 0.170057v-0.332015c134.943797-6.203009 281.791542-18.633322 309.60791-142.426279z" fill="#E0D5A4"></path><path d="M516.838509 1023.925742c-1.101318 0-2.194537-0.048588-3.303952-0.097175l-1.773446-0.064783-1.295668 0.064783c-2.283614 0.105273-4.599621 0.218644-6.672688-0.380602-129.78542-5.951974-323.107148-16.131064-323.107148-199.427563 0-86.137612 60.693937-127.145497 119.387686-166.809126 16.357805-11.045568 33.258172-22.46364 48.547051-34.699602 55.559853-47.818238 74.444211-86.882621 88.234975-115.419704 14.090387-29.160623 25.289815-52.328782 66.613519-56.142904 2.510356-0.842184 5.377021-0.607344 7.968356-0.518267l0.923164 0.032392 0.19435-0.032392c2.648021-0.089077 5.571371-0.307721 8.122217 0.526365 41.194137 3.86271 52.385467 27.006575 66.459658 56.134806 13.790764 28.528985 32.675121 67.601465 88.575088 115.695033 14.956865 11.960633 31.865329 23.378705 48.215036 34.424273 58.69375 39.655531 119.387686 80.671514 119.387686 166.809126 0 183.336988-193.427001 193.475588-323.212421 199.43566a11.393778 11.393778 0 0 1-3.263463 0.46968z m-5.077398-24.447631l2.631825 0.080979c0.615442-0.129567 1.238982-0.210546 1.886817-0.23484 165.634927-7.595852 302.74087-26.026726 302.74087-175.287652 0-73.229522-52.798461-108.900875-108.698427-146.66959-16.746506-11.312799-34.067964-23.022397-50.126147-35.873802-60.054201-51.664752-81.035921-95.085818-94.923859-123.81725-13.904135-28.771922-19.661758-40.67587-49.259669-42.708449a12.786621 12.786621 0 0 1-1.854424-0.267231l-0.825989 0.024294-0.97175 0.032391-1.700564-0.032391-0.850282-0.024294a11.223722 11.223722 0 0 1-1.822033 0.267231c-29.59791 2.032579-35.355534 13.944624-49.259669 42.708449-13.887939 28.731433-34.877757 72.152498-94.599942 123.533823-16.390197 13.126734-33.711656 24.828233-50.458162 36.149131-55.899966 37.768715-108.698427 73.440068-108.698427 146.66959 0 149.269024 137.105943 167.699898 302.740871 175.287653 0.655932 0.024294 1.295668 0.113371 1.919207 0.234839l2.129754-0.072881z" fill="#33363A"></path><path d="M478.438156 617.167044c-4.64011 0-9.069674-2.672315-11.094155-7.182858l-8.923912-19.896598a12.146885 12.146885 0 1 1 22.172115-9.928054l8.923911 19.896598a12.146885 12.146885 0 0 1-11.077959 17.110912zM545.561844 617.167044c-1.660074 0-3.344442-0.340113-4.955929-1.060828-6.12203-2.745196-8.867226-9.936152-6.12203-16.050084l8.923911-19.896598c2.753294-6.12203 9.936152-8.85103 16.050085-6.12203 6.12203 2.745196 8.867226 9.936152 6.12203 16.050084l-8.923912 19.896598c-2.024481 4.510543-6.454045 7.182858-11.094155 7.182858z" fill="#33363A"></path>
                                    </svg>
                                </div>
                                An-l
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                    <Form onSubmit={this.handleSubmit}>
                        <fieldset className="text-center">
                            <p>请使用管理员账号登录</p>
                            <FormGroup>
                                <Input placeholder="用户名..." type="text" 
                                    name='name'
                                    value={this.state.name} 
                                    onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="密码..." type="password"
                                    name='password' 
                                    value={this.state.password} 
                                    onChange={this.handleChange}/>
                            </FormGroup>
                             <FormGroup>
                                <Button size='sm'>登录</Button>
                            </FormGroup>
                        </fieldset>
                    </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;
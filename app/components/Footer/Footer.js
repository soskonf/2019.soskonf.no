//@flow
import * as React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Facebook, Mail, Twitter } from 'react-feather';
import Link from '../Link/Link';
import './Footer.less';

type FooterProps = {
    facebookUrl?: string,
    twitterUrl?: string,
    mailUrl?: string
}

Footer.defaultProps = {
    twitterUrl: "https://twitter.com/dndtrdinfosec",
    mailUrl: "mailto:program@soskonf.no"
    // , codeOfConduct: "https://java.no/principles.html#"
};

function Footer(props: FooterProps): React.Node {
    return (
        <Grid className="footer" fluid>
            <Row around="xs" className="footer-content">
                <Col xs={12} sm={8} md={4} lg={4}>
                    <Row center="xs" around="xs">
{/*                        <Col>
                            <a href={props.facebookUrl} target="_blank"><Facebook className="social-icon" size="32" /></a>
                        </Col>*/}
                        <Col>
                            <a href={props.twitterUrl} target="_blank"><Twitter className="social-icon" size="32" /></a>
                        </Col>
                        <Col>
                            <a href={props.mailUrl} target="_blank"><Mail className="social-icon" size="32" /></a>
                        </Col>
                    </Row>
                    {/*<Row center="xs" className="info-spacer">
                        <Col>
                            <Link href={props.codeOfConduct} className="javabin nav-item draw meet">Code of Conduct</Link>
                        </Col>
                         <Col>
                            <Link href={props.cookies} className="javabin nav-item draw meet">Cookies</Link>
                        </Col>
                    </Row>*/}
                </Col>
            </Row>
        </Grid>
    )
}

export default Footer;
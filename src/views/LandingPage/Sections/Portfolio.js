import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import portfolio from "assets/img/homepage.png";

const useStyles = makeStyles(styles);

export default function Portfolio() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} >
            <Card plain>
                <h2>Design.<br/>
                <span style={{color: "#6e48aa"}}>Development.</span>
                <br/>Hosting.</h2>
              <CardBody>
                <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p><br/><br/>
                <Button variant="outlined" size="large" color="primary">
                        Our works so far!!
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} >
            <Card plain>
                <img src={portfolio} alt="..." className={imageClasses} />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

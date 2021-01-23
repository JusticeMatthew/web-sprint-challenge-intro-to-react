// Write your Character component here
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CharacterAccordion({ results }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {results.map((char, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <StyledNames>
              <Typography className='names'>{char.name}</Typography>
            </StyledNames>
          </AccordionSummary>
          <AccordionDetails>
            <dl>
              <StyledList>
                <dd>Gender: {char.gender}</dd>
                <dd>Height: {char.height}</dd>
                <dd>Skin Color: {char.skin_color}</dd>
                <dd>Eye Color: {char.eye_color}</dd>
                <dd>Birth Year: {char.birth_year}</dd>
              </StyledList>
            </dl>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const StyledList = styled.div`
  dd {
    text-align: left;
    display: list-item;
    list-style-type: '🌑';
    padding-inline-start: 1ch;
    padding-bottom: 3px;
  }
`;

const StyledNames = styled.span`
  .names {
    font-weight: bold;
    font-size: 1rem;
  }
`;

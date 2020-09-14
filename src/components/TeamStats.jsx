import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FixturesTable = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  max-height: 400px;
  min-width: 850px;
  flex-wrap: wrap;
  background-color: #fff;
  overflow-x: hidden;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #b2b2b2;
  }
`;

const LeagueTableHeader = styled.div`
  grid-area: header;
  font-weight: 700;
  min-width: 850px;
  padding: 5px;
  padding-top: 10px;
  background-color: #fff;
  border-bottom: 1px solid #b2b2b2;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const FixtureContainer = styled.div`
  border: 1px solid #f1f3f4;
  width: 50%;
  min-height: 200px;
  cursor: pointer;
  padding: 5px;
  background-color: #fff;
  display: grid;
  grid-template-areas:
    "teamOne date teamTwo";

  align-content: center;
  justify-content: space-around;

  &:hover {
    background-color: #f3f2f2;
  }
`;

const TeamOne = styled.div`
  grid-area: teamOne;
  min-width: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-weight: 700;
`;

const TeamTwo = styled.div`
  grid-area: teamTwo;
  min-width: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-weight: 700;
`;

// const VS = styled.div`
//   grid-area: vs;
//   min-width: 100px;
//   display: flex;
//   font-size: 50px;
//   flex-flow: column;
//   align-items: center;
//   font-weight: 700;
//   justify-content: flex-end;
// `;

const GameInfoContainer = styled.div`
  grid-area: date
  min-width: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-weight: 700;
  justify-content: center;
`;

const GameInfo = styled.span`
  font-size: 13px;
  font-weight: 400;
`;

const Club = styled.div`
  grid-area: club;
  display: inline-block;
  height: 20px;
  padding-left: 10px;
`;

const parseDate = (date) => new Date(date).toDateString();

const parseTime = (date) => new Date(date).toLocaleTimeString([],
  { hour: 'numeric', minute: '2-digit', hour12: true });

const TeamStats = ({ fixtures }) => (
  <section>
    {console.log(fixtures)}
    {fixtures.length ? (
      <LeagueTableHeader>
        <Club>Upcoming Fixtures</Club>
      </LeagueTableHeader>
    )
      : null}
    <FixturesTable>

      {fixtures.map((fixture) => (
        <FixtureContainer>
          <TeamOne>
            <img src={fixture.homeTeam.logo} alt={fixture.homeTeam.team_name} width="100" />
            {fixture.homeTeam.team_name}
          </TeamOne>
          <GameInfoContainer>
            <GameInfo>{parseTime(fixture.event_date)}</GameInfo>
            <GameInfo>{parseDate(fixture.event_date)}</GameInfo>
            <GameInfo><bold>{fixture.league.name}</bold></GameInfo>
          </GameInfoContainer>
          <TeamTwo>
            <img src={fixture.awayTeam.logo} alt={fixture.awayTeam.team_name} width="100" />
            {fixture.awayTeam.team_name}
          </TeamTwo>
        </FixtureContainer>
      ))}
    </FixturesTable>
  </section>
);

TeamStats.propTypes = {
  fixtures: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TeamStats;
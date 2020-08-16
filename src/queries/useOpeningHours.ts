import { graphql, useStaticQuery } from 'gatsby';

export const useOpeningHours = (): {
  id: string;
  day: string;
  hours: string[];
}[] => {
  const {
    allOpeningHoursJson: { nodes },
  } = useStaticQuery(graphql`
    query OpeningHoursQuery {
      allOpeningHoursJson {
        nodes {
          id
          day
          hours
        }
      }
    }
  `);

  return nodes;
};

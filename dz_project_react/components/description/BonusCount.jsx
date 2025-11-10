export const BonusCount = ({ count }) => {
  return (
    <p>Премию получат: {count.filter((count) => count.isGiveBonuses).length}</p>
  );
};

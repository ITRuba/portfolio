/**
 * Renders titles such as "Wafeer | وفير" with the Arabic part marked as
 * lang="ar" so screen readers switch pronunciation. Visual output is identical.
 */
export default function BilingualTitle({ text }) {
  const [latin, arabic] = text.split(' | ');
  if (!arabic) return text;
  return (
    <>
      {latin} | <span lang="ar" dir="rtl">{arabic}</span>
    </>
  );
}

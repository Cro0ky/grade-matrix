export function getFullNameInitials(surname?: string | null, name?: string | null, patronymic?: string | null): string {
  const nameInitial = name?.[0] ? `${name[0]}.` : '';
  const patronymicInitial = patronymic?.[0] ? `${patronymic[0]}.` : '';
  return `${surname} ${nameInitial}${patronymicInitial}`.trim();
}

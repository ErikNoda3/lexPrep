const MATERIA_ALIASES: Record<string, string[]> = {
  constitucional: ["Direito Constitucional", "Constitucional"],
  administrativo: ["Direito Administrativo", "Administrativo", "Dir. Administrativo"],
  civil: ["Direito Civil", "Civil"],
  penal: ["Direito Penal", "Penal"],
  trabalho: ["Direito do Trabalho", "Trabalho", "Dir. do Trabalho"],
  tributario: ["Direito Tributário", "Tributário", "Tributario"],
  etica: [
    "Noções Gerais de Direito e Formação Humanística",
    "Etica",
    "Ética",
    "Ética e Estatuto",
  ],
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function resolveAliasKey(value: string): string | null {
  const normalizedValue = normalizeText(value);
  for (const [key, aliases] of Object.entries(MATERIA_ALIASES)) {
    if (aliases.some((alias) => normalizeText(alias) === normalizedValue)) {
      return key;
    }
  }
  return null;
}

export function normalizeMateriaFilter(value?: string): string | undefined {
  if (!value) return undefined;
  const aliasKey = resolveAliasKey(value);
  if (!aliasKey) return value;
  return MATERIA_ALIASES[aliasKey][0];
}

export function matchesMateriaFilter(materia: string, filter?: string): boolean {
  if (!filter) return true;
  const materiaKey = resolveAliasKey(materia);
  const filterKey = resolveAliasKey(filter);

  if (materiaKey && filterKey) return materiaKey === filterKey;
  if (materiaKey && !filterKey) return normalizeText(materia) === normalizeText(filter);
  if (!materiaKey && filterKey) return normalizeText(materia) === normalizeText(MATERIA_ALIASES[filterKey][0]);
  return normalizeText(materia) === normalizeText(filter);
}

/** Valores canônicos (como no banco) para o select de filtros na página de questões */
export const MATERIA_FILTER_OPTIONS: { label: string; value: string }[] = [
  { label: "Direito Constitucional", value: "Direito Constitucional" },
  { label: "Direito Administrativo", value: "Direito Administrativo" },
  { label: "Direito Civil", value: "Direito Civil" },
  { label: "Direito Empresarial", value: "Direito Empresarial" },
  { label: "Direito Penal", value: "Direito Penal" },
  { label: "Direito do Trabalho", value: "Direito do Trabalho" },
  { label: "Direito Tributário", value: "Direito Tributário" },
  {
    label: "Noções gerais / Ética",
    value: "Noções Gerais de Direito e Formação Humanística",
  },
  { label: "Direitos Humanos", value: "Direitos Humanos" },
  { label: "Direito Processual Civil", value: "Direito Processual Civil" },
];


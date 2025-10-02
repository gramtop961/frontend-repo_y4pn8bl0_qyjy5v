import React from 'react';
import * as Tabs from "@radix-ui/react-tabs";
import { Check, Copy } from 'lucide-react';

const snippets = {
  js: `// Install\nnpm i @authdisappear/js\n\n// 1-line login\nimport { login } from '@authdisappear/js'\nawait login()` ,
  python: `# Install\npip install authdisappear\n\n# 1-line login from backend\nfrom authdisappear import login\nuser = login()` ,
  curl: `# Test from terminal\ncurl -X POST https://api.authdisappear.com/v1/login`,
};

export default function CodeEmbed() {
  const [tab, setTab] = React.useState('js');
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(snippets[tab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section id="code" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white/90">Add auth in one line</h2>
          <button onClick={onCopy} className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15">
            {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <Tabs.Root value={tab} onValueChange={setTab} className="w-full">
          <Tabs.List className="mb-3 inline-flex rounded-lg border border-white/10 bg-white/5 p-1 text-white">
            <Tabs.Trigger value="js" className={`px-3 py-1.5 text-xs rounded-md data-[state=active]:bg-white/10`}>JavaScript</Tabs.Trigger>
            <Tabs.Trigger value="python" className={`px-3 py-1.5 text-xs rounded-md data-[state=active]:bg-white/10`}>Python</Tabs.Trigger>
            <Tabs.Trigger value="curl" className={`px-3 py-1.5 text-xs rounded-md data-[state=active]:bg-white/10`}>cURL</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="js">
            <pre className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4 text-[12px] leading-relaxed text-cyan-100 overflow-auto">
{snippets.js}
            </pre>
          </Tabs.Content>
          <Tabs.Content value="python">
            <pre className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4 text-[12px] leading-relaxed text-cyan-100 overflow-auto">
{snippets.python}
            </pre>
          </Tabs.Content>
          <Tabs.Content value="curl">
            <pre className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4 text-[12px] leading-relaxed text-cyan-100 overflow-auto">
{snippets.curl}
            </pre>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
}

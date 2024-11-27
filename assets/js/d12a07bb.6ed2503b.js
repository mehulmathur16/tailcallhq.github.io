"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[318],{64285:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"gh-action","title":"Github Action for Deploying GraphQL","description":"Deploy GraphQL servers effortlessly with GitHub Actions.","source":"@site/docs/gh-action.md","sourceDirName":".","slug":"/deploy-graphql-github-actions","permalink":"/tailcallhq.github.io/docs/deploy-graphql-github-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/gh-action.md","tags":[],"version":"current","lastUpdatedAt":1718970036000,"frontMatter":{"title":"Github Action for Deploying GraphQL","sidebar_label":"Deployments","description":"Deploy GraphQL servers effortlessly with GitHub Actions.","slug":"deploy-graphql-github-actions"},"sidebar":"docs","previous":{"title":"LLM Integration","permalink":"/tailcallhq.github.io/docs/llm-integration"},"next":{"title":"Deploy on Fly","permalink":"/tailcallhq.github.io/docs/deploy-tailcall-graphql-fly-actions"}}');var n=l(74848),s=l(28453);const o={title:"Github Action for Deploying GraphQL",sidebar_label:"Deployments",description:"Deploy GraphQL servers effortlessly with GitHub Actions.",slug:"deploy-graphql-github-actions"},c=void 0,r={},a=[{value:"Deploying to Fly",id:"deploying-to-fly",level:2},{value:"Inputs for <code>tailcallhq/gh-action</code>",id:"inputs-for-tailcallhqgh-action",level:3},{value:"Deploying to AWS Lambda",id:"deploying-to-aws-lambda",level:2},{value:"Inputs for <code>tailcallhq/gh-action</code>",id:"inputs-for-tailcallhqgh-action-1",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Github Action ",(0,n.jsx)(t.a,{href:"https://github.com/tailcallhq/gh-action",children:"tailcallhq/gh-action"})," can be used to easily deploy a ",(0,n.jsx)(t.code,{children:"tailcall"})," server to any supported cloud provider. Currently, AWS Lambda and Fly are supported."]}),"\n",(0,n.jsx)(t.h2,{id:"deploying-to-fly",children:"Deploying to Fly"}),"\n",(0,n.jsxs)(t.p,{children:["Below is an example of how to deploy a ",(0,n.jsx)(t.code,{children:"tailcall"})," server to Fly using the ",(0,n.jsx)(t.code,{children:"tailcallhq/gh-action"})," action."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'on: [push]\n\njobs:\n  deploy_tailcall:\n    runs-on: ubuntu-latest\n    name: Deploy Tailcall\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Deploy Tailcall\n        id: deploy-tailcall\n        uses: tailcallhq/gh-action@<version> # Replace <version> with the desired version\n        with:\n          provider: "fly" # Specifies the cloud provider as \'fly\'\n          fly-api-token: ${{ secrets.FLY_API_TOKEN }}\n          fly-app-name: "tailcall"\n          fly-region: "lax"\n          tailcall-config: "config.graphql"\n'})}),"\n",(0,n.jsxs)(t.h3,{id:"inputs-for-tailcallhqgh-action",children:["Inputs for ",(0,n.jsx)(t.code,{children:"tailcallhq/gh-action"})]}),"\n",(0,n.jsxs)(t.p,{children:["Following are the inputs for the ",(0,n.jsx)(t.code,{children:"tailcallhq/gh-action"})," action when deploying to Fly:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Input"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"provider"})}),(0,n.jsxs)(t.td,{children:["When deploying to Fly, this should be set to ",(0,n.jsx)(t.code,{children:"fly"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"tailcall-config"})}),(0,n.jsxs)(t.td,{children:["The path of the ",(0,n.jsx)(t.code,{children:"tailcall"})," configuration file."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"tailcall-version"})}),(0,n.jsxs)(t.td,{children:["Specifies the version of ",(0,n.jsx)(t.code,{children:"tailcall"})," to use for deployment. If not provided, the Action defaults to the latest available version."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"fly-api-token"})}),(0,n.jsx)(t.td,{children:"The Fly API token required for authentication. Ensure this value is stored securely, such as in GitHub Secrets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"fly-app-name"})}),(0,n.jsxs)(t.td,{children:["The name of the Fly app being deployed. Defaults to ",(0,n.jsx)(t.code,{children:"<orgname>-<reponame>"})," if not specified."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"fly-region"})}),(0,n.jsxs)(t.td,{children:["The region where the Fly app will be deployed. Defaults to ",(0,n.jsx)(t.code,{children:"ord"})," if not specified."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"deploying-to-aws-lambda",children:"Deploying to AWS Lambda"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'on: [push]\n\njobs:\n  deploy_tailcall:\n    runs-on: ubuntu-latest\n    name: Deploy Tailcall\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Deploy Tailcall\n        id: deploy-tailcall\n        uses: tailcallhq/gh-action@<version> # Replace <version> with the desired version\n        with:\n          provider: "aws"\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: "us-east-1"\n          aws-iam-role: "iam_for_tailcall"\n          terraform-api-token: ${{ secrets.TERRAFORM_API_TOKEN }}\n          tailcall-config: "config.graphql"\n'})}),"\n",(0,n.jsxs)(t.h3,{id:"inputs-for-tailcallhqgh-action-1",children:["Inputs for ",(0,n.jsx)(t.code,{children:"tailcallhq/gh-action"})]}),"\n",(0,n.jsxs)(t.p,{children:["Following are the inputs for the ",(0,n.jsx)(t.code,{children:"tailcallhq/gh-action"})," action when deploying to AWS Lambda:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Input"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"provider"})}),(0,n.jsxs)(t.td,{children:["When deploying to AWS Lambda, this should be set to ",(0,n.jsx)(t.code,{children:"aws"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"tailcall-config"})}),(0,n.jsxs)(t.td,{children:["The path to the ",(0,n.jsx)(t.code,{children:"tailcall"})," configuration file used for deployment."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"tailcall-version"})}),(0,n.jsxs)(t.td,{children:["Specifies the version of ",(0,n.jsx)(t.code,{children:"tailcall"})," to use for deployment. If not provided, the Action defaults to the latest available version."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"aws-access-key-id"})}),(0,n.jsx)(t.td,{children:"The AWS access key ID required for authentication. Ensure this value is stored securely, such as in GitHub Secrets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"aws-secret-access-key"})}),(0,n.jsx)(t.td,{children:"The AWS secret access key required for authentication. Store this securely, such as in GitHub Secrets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"aws-region"})}),(0,n.jsxs)(t.td,{children:["The AWS region where the Lambda function will be deployed (e.g., ",(0,n.jsx)(t.code,{children:"us-east-1"}),")."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"aws-iam-role"})}),(0,n.jsxs)(t.td,{children:["The IAM role name to be created and used for the deployment. If not specified, defaults to ",(0,n.jsx)(t.code,{children:"iam_for_tailcall"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"aws-lambda-function-name"})}),(0,n.jsxs)(t.td,{children:["The name assigned to the created Lambda function. Defaults to ",(0,n.jsx)(t.code,{children:"tailcall"})," if not specified."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"terraform-api-token"})}),(0,n.jsx)(t.td,{children:"The Terraform Cloud API token required for authentication. Ensure this value is stored securely, such as in GitHub Secrets."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>c});var i=l(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
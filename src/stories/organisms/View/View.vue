<template>
  <article>
    <section class="quizzes-page">
      <h1>Pages in Storybook</h1>
      <p>
        We recommend building UIs with a
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>component-driven</strong>
        </a>
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app. Here are some
        handy patterns for managing page data in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose
          such data from the "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock
          these services out using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a
          href="https://storybook.js.org/tutorials/"
          target="_blank"
          rel="noopener noreferrer"
          >Storybook tutorials</a
        >
        . Read more in the
        <a
          href="https://storybook.js.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          >docs</a
        >.
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span>
        Adjust the width of the canvas with the
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
</template>

<script setup></script>

<style lang="postcss" scoped>
.quizzes-page {
  p {
    @apply my-4 mx-0;
  }

  ul {
    @apply pl-7 my-4 mx-0;
  }

  li {
    @apply mb-2;
  }

  .tip {
    @apply inline-block rounded-2xl text-xs leading-3 font-bold bg-lime-100 text-lime-500 dark:bg-lime-700 dark:text-lime-50 py-1 px-3 mr-2.5 align-top;
  }

  .tip-wrapper {
    @apply text-sm leading-5 my-10;

    svg {
      @apply inline-block h-3 w-3 mr-1 align-top mt-1;

      path {
        @apply fill-primary-700;
      }
    }
  }
}
</style>

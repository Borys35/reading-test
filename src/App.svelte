<script lang="ts">
  import Button from "./lib/Button.svelte";
  import Container from "./lib/Container.svelte";
  import Field from "./lib/Field.svelte";
  import Layout from "./lib/Layout.svelte";
  import ReadBox from "./lib/ReadBox.svelte";
  import Select from "./lib/Select.svelte";
</script>

<div>
  <Layout>
    <Container>
      <div class="wrapper">
        <h1>Reading speed test</h1>

        <div class="toolbar">
          <div class="settings">
            <Field label="Font size">
              <Select>
                <option>14px</option>
                <option>16px</option>
                <option>18px</option>
                <option>20px</option>
              </Select>
            </Field>
            <Field label="Test time">
              <Select>
                <option>1 min</option>
                <option>2 min</option>
                <option>5 min</option>
              </Select>
            </Field>
            <Field label="Language">
              <Select>
                <option>English</option>
                <option>French</option>
                <option>Polish</option>
              </Select>
            </Field>
          </div>
          <Button>Start</Button>
        </div>

        <h2>Click START button to start the test</h2>

        <ReadBox />
      </div>
    </Container>
  </Layout>
</div>

<style lang="scss">
  @import "./styles/variables";

  :global(*) {
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  }

  .wrapper {
    padding: 4rem 0 2rem;
  }

  h1 {
    margin-bottom: 4rem;
  }

  h2 {
    color: $primary-color;
    margin-bottom: 1rem;
  }

  .toolbar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .settings {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: $bp-desktop) {
    .toolbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    .settings {
      flex-direction: row;
    }

    h2 {
      text-align: right;
      padding-right: 3rem;
    }
  }
</style>

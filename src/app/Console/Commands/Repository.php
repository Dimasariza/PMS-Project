<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class Repository extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository {model} {--single}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make Repository';

    /**
     * Filesystem instance
     */
    protected Filesystem $files;

    /**
     * Return the interface stub file path
     */
    public function getInterfaceStubPath(): string
    {
        return base_path().'/stubs/customize/repo.interface.stub';
    }

    /**
     * Return the single interface stub file path
     */
    public function getInterfaceSingleStubPath(): string
    {
        return base_path().'/stubs/customize/repo.interface.single.stub';
    }

    /**
     * Return the interface implementation stub file path
     */
    public function getImplStubPath(): string
    {
        return base_path().'/stubs/customize/repo.impl.stub';
    }

    /**
     * Return the interface implementation stub file path
     */
    public function getImplSingleStubPath(): string
    {
        return base_path().'/stubs/customize/repo.impl.single.stub';
    }

    /**
     * Return the interface destination path
     */
    public function getInterfaceDestinationPath(string $model): string
    {
        return app_path()."/Repositories/{$model}/{$model}Repository.php";
    }

    /**
     * Return the interface implementation destination path
     */
    public function getImplDestinationPath(string $model): string
    {
        return app_path()."/Repositories/{$model}/{$model}RepositoryImpl.php";
    }

    /**
     * Replace {{ model }} stub content
     */
    public function getStubContent(string $model, string $path): string
    {
        $contents = file_get_contents($path);
        $contents = str_replace('{{ model }}', $model, $contents);

        return $contents;
    }

    /**
     * Build the directory for the class if necessary.
     */
    protected function makeFile(string $path, string $content): void
    {
        $this->files->put($path, $content);
        $this->info("File {$path} created");
    }

    /**
     * Make a directory.
     */
    protected function makeDir(string $model): bool
    {
        $path = app_path().'/Repositories/'.$model;

        return $this->files->makeDirectory($path, 0777, true, true);
    }

    /**
     * Create a new command instance.
     */
    public function __construct(Filesystem $files)
    {
        parent::__construct();

        $this->files = $files;
    }

    /**
     * Map the stub variables present in stub to its value
     */
    public function getStubVariables(): array
    {
        return [
            'model' => $this->argument('model'),
            'single' => $this->option('single') ?? false,
        ];
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $args = $this->getStubVariables();
        $model = $args['model'];
        $single = $args['single'];

        $defaultPath = app_path().'/Repositories/';

        if ($this->files->exists($defaultPath.$model)) {
            $this->error("Path for {$model} already exists");

            return;
        }

        if ($single) {
            $this->createSingleRepository($model);

            return;
        }

        $this->createDefaultRepository($model);
    }

    /**
     * Create an default repo.
     */
    private function createDefaultRepository(string $model)
    {
        $interfacePath = $this->getInterfaceDestinationPath($model);
        $implPath = $this->getImplDestinationPath($model);

        $this->makeDir($model);
        $this->makeFile($interfacePath, $this->getStubContent($model, $this->getInterfaceStubPath()));
        $this->makeFile($implPath, $this->getStubContent($model, $this->getImplStubPath()));
    }

    /**
     * Create an repo with a single dto.
     */
    private function createSingleRepository(string $model)
    {
        $interfacePath = $this->getInterfaceDestinationPath($model);
        $implPath = $this->getImplDestinationPath($model);

        $this->makeDir($model);
        $this->makeFile($interfacePath, $this->getStubContent($model, $this->getInterfaceSingleStubPath()));
        $this->makeFile($implPath, $this->getStubContent($model, $this->getImplSingleStubPath()));
    }
}
